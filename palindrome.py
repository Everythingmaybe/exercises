#console.log(palindrome('racecar'))
#console.log(palindrome('😀raccar😀'))
#console.log(palindrome('😀raccar'));
#console.log(palindrome('12321'));
first_pal = 'racecar'
second_pal = ('😀raccar😀')
print(second_pal[1])

def is_palindrome(input_str):
    return input_str == input_str[::-1]

print(is_palindrome(first_pal))
print(is_palindrome(second_pal))
