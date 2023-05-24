import { EAlertTypes } from "./global.interface";

export function Alert(type: EAlertTypes, message: string): void {
    const alert = document.createElement('div');
    alert.innerText = message;

    alert.className = "alert"

    switch (type) {
        case "error":
            alert.style.backgroundColor = '#D6372D';
            break;
        case "success":
            alert.style.backgroundColor = '#42A862';
            break;
        case "warning":
            alert.style.backgroundColor = '#FFAF45';
            break;

        default:
            break;
    }

    document.body.appendChild(alert);

    setTimeout(() => {
        document.body.removeChild(alert);
    }, 7500);
}