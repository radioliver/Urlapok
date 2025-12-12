function telefonError(telefon)
{
    error = "";
    let newstrng = strng.replace(/[/(/)/./-/]/g , '')
    let filter = /^\d+$/;
    if (!filter.test(newstrng)) {
        error = "A telefonszám csak számokat tartalmazhat!";
    }
    return error;

}

function ellenor()
{
    let telefon = document.forms["urlap"]["telefon"].value;
    let email = document.forms["urlap"]["email"].value;

    let telerror = telefonError(telefon)
    if (telerror)
    {
        alert(telerror);
        return false;
    }
    else
    {
        let teleredmeny = document.getElementById("telefonEredmeny");
        teleredmeny.innerText = "A telefonszám rendben van." , + telefon;
        return false;
    }
}