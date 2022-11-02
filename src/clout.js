let clout = 39;
let logocounter = 0;

class ShopButton {
    constructor(button_name, cost, cost_name, is_bought, button_color) {
        this.button_name = button_name;
        this.cost = cost;
        this.is_bought = is_bought;
        this.button_color = button_color;
        this.cost_name = cost_name;
    }
    updatebutton() {
        if (clout >= this.cost) {
            document.getElementById(this.button_name).disabled = false;
            document.getElementById(this.cost_name).style.color = "aquamarine";
        }
        else {
            if (this.button_color != "red") {
                document.getElementById(this.cost_name).style.color = "red";
            }
        }
    }
    togglebutton() {
        if (clout >= this.cost) {
            document.getElementById(this.button_name).disabled = true;
            this.is_bought = true
            clout -= this.cost;
            document.getElementById(this.cost_name).style.color = "lime";
            if (this.button_name == "disconnectswitch") {
                visibility('disconnectbtn', 1);
                visibility('kickshop', 1);
            } else if (this.button_name == "kickswitch") {
                visibility('kickbtn', 1);
                visibility('banshop', 1);
            } else if (this.button_name == "banswitch") {
                visibility('banbtn', 1);
            }
        }
    }

}

function addclout(button, multiplier) {
    clout += multiplier;
}

function visibility(button, x) {
    if (x == 1) {
        document.getElementById(button).style.visibility = "visible";
    } else {
        document.getElementById(button).style.visibility = "hidden";
    }
}

function changeicon() {
    if (logocounter == 0) {
        document.getElementById('icon').src = "imgs/logos/suscord_logo_2.png";
        logocounter = 1;
    } else if (logocounter == 1) {
        document.getElementById('icon').src = "imgs/logos/suscord_logo_3.png";
        logocounter = 2;
    } else if (logocounter == 2) {
        document.getElementById('icon').src = "imgs/logos/suscord_logo.png";
        logocounter = 0;
    }
}

