def PondSizes(pond):
  size = {'sz': 0}
  sizes = []

  # fn(i,j):
  def fn(i, j):

    # if value is not 0
    if pond[i][j] != 0:
      # return
      return

    # change value to -1
    pond[i][j] = -1

    size['sz'] += 1

    # check up
    if i > 0:
      fn(i - 1, j)
    # check down
    if i < len(pond) - 1:
      fn(i + 1, j)
    # check left
    if j > 0:
      fn(i, j - 1)
    # check right
    if j < len(pond[0]) - 1:
      fn(i, j + 1)
    # check downleft
    if i < len(pond) - 1 and j > 0:
      fn(i + 1, j - 1)
    # check upright
    if i > 0 and j < len(pond[0]) - 1:
      fn(i - 1, j + 1)
    # check upleft
    if i > 0 and j > 0:
      fn (i - 1, j - 1)
    # check downright
    if i < len(pond) - 1 and j < len(pond[0]) - 1:
      fn (i + 1, j + 1)
    return

  # loop through rows
  for i in range(len(pond)):
    # loop through cols
    for j in range(len(pond[0])):
      # if value is 0
      if pond[i][j] == 0:
        size['sz'] = 0
        # fn(i, j, 1)
        fn(i, j)
        sizes.append(size['sz'])

  return sizes

print(PondSizes([
  [0]
]))
print(PondSizes([
  [1]
]))
print(PondSizes([
  [0,2,1,0],
  [0,1,0,1],
  [1,1,0,1],
  [0,1,0,1]
]))