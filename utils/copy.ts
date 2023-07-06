export function copyText(textToCopy: string) {
  try {
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    return true
  } catch (error) {
    return false
  }
}
