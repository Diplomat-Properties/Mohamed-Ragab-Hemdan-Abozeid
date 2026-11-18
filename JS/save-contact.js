function downloadVCard() {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Mohamed Ragab Hemdan Abozeid
TITLE:Sales Manager
ORG:RISE Properties
TEL;TYPE=WORK,VOICE:+971‬‬‬‬582261287‬
EMAIL:hemdan@riseproperties.ae
URL:http://www.riseproperties.ae
ADR;TYPE=WORK:;;PO Box No 181702, Office NO.1607, Opal Tower, Business Bay;Dubai;;UAE
END:VCARD
  `.trim();

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'Mohamed Ragab Hemdan Abozeid.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.querySelector('.save-contact-button').addEventListener('click', function (e) {
  e.preventDefault();
  downloadVCard();
});


