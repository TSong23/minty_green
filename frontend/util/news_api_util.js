export const fetchBusinessNews = (ticker, time) => (
  $.ajax({
    method: 'GET',
    url: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c1f61f0aba3d43458ef9e0786bb98408'
  })
)