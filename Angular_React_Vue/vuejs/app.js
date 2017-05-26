/*
  1) Create a <div> and take control with a Vue Instance
  2) Output an array of hobbies in this <div> (provide some default hobbies)
  3) Add a 'New Hobby' button + <input> field where you add the hobby the user entered to the list
  4) Make the hobbies clickable to remove them once clicked
  5) Add a <p>Hobby deleted!</p> which is only shown once at least one hobby was deleted (be creative on how to track this!)
  6) Add a hobby counter (<p>Hobbies: ...</p>) above the list of hobbies
  7) Dynamically style/ add classes to the hobby counter, depending on whether you have more or less than 3 hobbies
  8) Outsource your hobbies (the <li> elements) into a re-usable component
*/

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
