const form = document.querySelector("form");
const btn = document.querySelector("#btn");
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*@"
const copy = document.querySelector("#clip");
let pass = document.querySelector("#password");

function generatePassword() {
    let len = document.querySelector("#length").value;
    
    if(len < 8){
        len = 8;
    } else if(len > 128){
        len = 128;
    }

    let retVal = "";
    
    for (let i = 0, n = charset.length; i < len; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    
    return retVal;
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    let password = generatePassword();
    pass.innerHTML = password;
});
btn.addEventListener("click", (e) => {
    e.preventDefault();
    let password = generatePassword();
    pass.innerHTML = password;
});
copy.addEventListener("click", (e) => {
    navigator.clipboard.writeText(pass.textContent);
}
);
