Vue.component('vli', {
  props: ['hobby', 'attributes'],
  data: function () {
    return ({})
  },
  methods: {
    removeSelf() {
      this.$emit('removeitem', this.hobby)
    }
  },
  template: '<li v-on:click="removeSelf(hobby)" class="attributes">{{ hobby }}</li>',
})

const app = new Vue({
  el: '#app',
  data: {
    hobbies: ['surfting', 'music', 'fitness'],
    hobbyCount: 3,
    hobbyDeleted: false,
    hobbyInput: "",
  },
  methods: {
    addHobby(hobby) {
      if (hobby.length === 0) return
      this.hobbies.push(hobby)
      this.hobbyInput = ""
      this.hobbyCount++
    },
    removeLI(hobby) {
      this.hobbies = this.hobbies.filter((hobbyLI) => {
        return hobbyLI !== hobby
      })
      this.hobbyDeleted = true
      this.hobbyCount--
    },
    getColor(index) {
      return index % 2 === 0 ? "red" : "gold"
    }
  }

})
