validWords = {'tree', 'used'}
keypad = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

# 32

def getT9Chars(digits):
  strDigits = str(digits);
  words = []

  # recurse func takes in word and position
  def recurse(word, position):
    # if position == len(digits)
    if position == len(strDigits):
      # check if word is valid
      if (word in validWords):
        words.append(word)
      return

    # get integer digit from strDigits[position], 3
    digit = int(strDigits[position])

    # get letters from keypad[digit], 'def'
    letters = keypad[digit]

    # loop through letters
    for letter in letters:
      # recurse with word + letter and position + 1
      recurse(word + letter, position + 1)

  # call recurse with '' and 0
  recurse('', 0)

  return words

print(getT9Chars(3))
print(getT9Chars(32))
print(getT9Chars(8733))