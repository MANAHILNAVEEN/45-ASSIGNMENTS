function sandwich(...items: string[]): void {
    console.log("Sandwich Order:")

    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("enjoy your sandwich manahil")

sandwich(`capsicum`, `tomato`, `chicken`)
sandwich(`beef`, `cheese`)
sandwich(`garlic chicken`, `mayo sauce`)