# puts is the equilvant to consoole.log 
    puts "Hello World!"

# in ruby there us no "let" or "const", 
# varaibles are declared using a single "="

# example: 
    greeting = 'hello'

    puts greeting

#def is equilvant to function 

#only strings can be reversed 
    puts 40.to_s.reverse

#to_s converts things to strings
#to_i converts things to integers (numbers)
#to_a converts things to arrays

#[].max will give you the highest number in that array 
        puts [12, 47, 35, 22].max 

#But it’s annoying to have to retype that list every time you need it, isn’t it?
#Let’s save our numbers inside a ticket like so:

    puts ticket = [12,47,35]

    puts ticket

#put the array of numbers order 

  puts ticket.sort!

#The gsub method is short for global substitute. 
#It replaces all occurences of “toast” with “honeydew”.

    # poem.gsub("toast", "honeydew")

# The .join methid takes a line of arrays and puts them together into a string