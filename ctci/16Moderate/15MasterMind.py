def masterMind(guess, solution):
  sol = {
    'R': 0,
    'G': 0,
    'B': 0,
    'Y': 0
  }
  hits = 0
  partialHits = 0
  others = ''

  for slot in solution:
    sol[slot] += 1
  
  for i, slot in enumerate(guess):
    if guess[i] == solution[i]:
      hits += 1
      sol[slot] -= 1
    else:
      others += slot
  
  for slot in others:
    if sol[slot] > 0:
      sol[slot] -= 1
      partialHits += 1
  
  return [hits, partialHits]

print(masterMind('RGGB', 'RRRG'))
print(masterMind('RGYB', 'RRYG'))
