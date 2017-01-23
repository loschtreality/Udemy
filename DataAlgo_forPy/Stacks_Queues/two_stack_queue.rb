# Given the Stack class below, implement a Queue class using two stacks! Note, this is a "classic" interview problem. Use a Ruby array data structure as your Stack.

# Uses lists instead of your own Stack class.

class Queue2Stacks
  def initialize
    @stack1 = []
    @stack2 = []
  end

  def enqueue(item)
    @stack1 << item
  end

  def dequeue
    if @stack2.empty?
      # amortize and outbound stack
      # need to pop to put in reverse order

      until @stack1.empty?
        item = @stack1.pop
        @stack2 << item
      end

    end

    @stack2.pop
  end


end

q2s = Queue2Stacks.new

5.times do |i|
  q2s.enqueue(i)
end

5.times do
  p q2s.dequeue
end
