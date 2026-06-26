const handleInput = () => {
    const loadName = document.getElementById("input-text").value;
    const loadId = document.getElementById("input-id").value;
    // console.log(loadName, loadId);
    // localStorage.setItem(loadName, loadId)

    //suppose, we store the input in a object, how to push this in local Storage 
    const info = { loadName, loadId }
    localStorage.setItem(loadId, JSON.stringify(info))


}

//local Storage exists permanently, until manually removed.
//session storage exits only that tab.  