package main

import (
	"fmt"
)

func main() {

	var name, newMessage string
	var age int

	// Ask for name
	fmt.Println("What is your name?")
	fmt.Scan(&name)
	fmt.Printf("Hello, %s!\n", name)

	// Ask for age
	fmt.Println("How old are you?")
	fmt.Scan(&age)
	fmt.Printf("Hi, %s! You are %d years old.\n", name, age)

	// Another format
	newMessage = fmt.Sprintf("That is, %s is %d years old.", name, age)
	fmt.Println(newMessage)

}
