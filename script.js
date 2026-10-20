// Sửa nội dung lá thư trong biến message bên dưới.
const message = `Hôm nay mình mang một bó hoa tặng cho một bông hoa đang đọc những dòng chữ này.

Mình hy vọng bạn sẽ luôn là bông hoa rực rỡ nhất trong thế giới của chính mình, luôn tự tin, tỏa sáng và sống những ngày tháng thật hạnh phúc.

Mong rằng mỗi ngày trôi qua, bạn đều gặp được những điều dịu dàng, có thật nhiều niềm vui và luôn có những lý do để mỉm cười.

Mình hy vọng là bạn sẽ vui khi nhận bó hoa này. 
Mình mong đây sẽ là bó hoa khởi đầu cho nhiều bó hoa của sau này nữa.

CHÚC BẠN 20/10 VUI VẺ`;

const welcome = document.getElementById('welcome');
const flowerScreen = document.getElementById('flowerScreen');
const letterScreen = document.getElementById('letterScreen');
const startButton = document.getElementById('startButton');
const letterButton = document.getElementById('letterButton');
const envelopeButton = document.getElementById('envelopeButton');
const letterPaper = document.getElementById('letterPaper');
const letterText = document.getElementById('letterText');
const backButton = document.getElementById('backButton');

startButton.addEventListener('click', () => {
  welcome.classList.add('hidden');
  flowerScreen.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

letterButton.addEventListener('click', () => {
  flowerScreen.classList.add('hidden');
  letterScreen.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

envelopeButton.addEventListener('click', () => {
  envelopeButton.classList.add('hidden');
  letterPaper.classList.remove('hidden');
  backButton.classList.remove('hidden');
  letterText.textContent = '';
  let index = 0;

  function typeNextCharacter() {
    if (index < message.length) {
      letterText.textContent += message.charAt(index);
      index += 1;
      // Tự cuộn nhẹ theo chữ trên màn hình điện thoại.
      if (index % 5 === 0) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
      window.setTimeout(typeNextCharacter, 32);
    }
  }
  typeNextCharacter();
});

backButton.addEventListener('click', () => {
  letterScreen.classList.add('hidden');
  flowerScreen.classList.remove('hidden');
  envelopeButton.classList.remove('hidden');
  letterPaper.classList.add('hidden');
  backButton.classList.add('hidden');
  letterText.textContent = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
