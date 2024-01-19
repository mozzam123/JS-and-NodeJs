// Creating a simple object
let parent = {
    greet: () => {
        console.log('Hello');
    }
}


// Creating a child object that inherits from the parent
let child = Object.create(parent)

child.greet()