const correcOfNumInnInput = (value) => /^d+$/.test(value);
const checkingLength = (value) => [10, 12].includes(value.length);

const correctOfEnterInn = (inn) => {
  if (!inn) {
    return 'Обязательное поле';
  }

  if (!correcOfNumInnInput(inn)) {
    return 'Введите корректные данные';
  }

  if (!checkingLength) {
    return 'Введите корректные данные';
  }

  const innRegex = /^(d{10}|d{12})$/;
  if (!innRegex.test(inn)) {
    return 'Введите корректные данные';
  }

  return '';
};

export default correctOfEnterInn;