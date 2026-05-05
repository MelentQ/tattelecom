import Inputmask from 'inputmask';

export default function dateMask() {
  const phoneInputs = Array.from(document.querySelectorAll('.js-date-mask'));
  phoneInputs.forEach(input => {
    const instance = new Inputmask({
      alias: 'datetime',
      inputFormat: 'dd.mm.yyyy',
      placeholder: 'дд.мм.гггг',
      clearIncomplete: true,
      showMaskOnHover: false,
    });
    instance.mask(input);
  });
}
