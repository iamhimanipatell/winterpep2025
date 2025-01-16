function createUserProfile(username, age = 25, country = "Unknown") {
    return {
        username: username,
        age: age,
        country: country
    };
}

const user1 = createUserProfile("radha");
console.log(user1);

const user2 = createUserProfile("Krishna", 30, "India");
console.log(user2);
