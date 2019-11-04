export const createDeposit = (deposit) => (
  $.ajax({
    method: "POST",
    url: 'api/deposits',
    data: {deposit}
  })
)