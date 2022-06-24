function myProfile(){
    let name = prompt('Enter your name: ')
    let height = prompt('Enter your height: ')
    let country = prompt('Enter your country: ')
    
    if (name != null) (height != null) (country != null);{
        document.getElementById("demo").innerHTML = "Hello, my name's" + name + ", my height is " + height + "and I'm from " + country;
    }
}

// if ()