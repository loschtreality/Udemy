# Given two rectangles, determine if they overlap. The rectangles are defined as a Dictionary, for example:

# r1 = {
 # x and y coordinates of the bottom-left corner of the rectangle
#  'x': 2 , 'y': 4,
 # Width and Height of rectangle
#  'w':5,'h':12
# }


# If the rectangles do overlap, return the dictionary which describes the overlapping section
# Requirements
# Make sure the dictionary you output is in the same form as the input.
# Feel free to use an IDE for the code, but make sure you use paper/pencil or whiteboard to draw out your plan and logic


def rect_overlap(rect, box)
  x_overlap, w_overlap = calculate_overlap(rect[:x], rect[:w], box[:x], box[:w])
  y_overlap, h_overlap = calculate_overlap(rect[:y], rect[:y], box[:y], box[:y])

  return ({
    x: x_overlap,
    y: y_overlap,
    w: w_overlap,
    h: h_overlap
  })
end

def calculate_overlap(coor1, dim1, coor2, dim2)
  greater = [coor1, coor2].max

  lower = [coor1 + dim1, coor2 + dim2].min

  return [nil, nil] if greater >= lower

  overlap = lower - greater

  return [greater, overlap]
end


rect = {
  x: 2,
  y: 4,
  w: 4,
  h: 4
}

box = {
  x: 5,
  y: 5,
  w: 4,
  h: 4
}

p rect_overlap(rect, box)
