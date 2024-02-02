function Price({currency, num, numSize }) {
  const formattedNum = num.toLocaleString();
  return (
    <>
      <span className={numSize}>{formattedNum}</span> {currency}
    </>
  )
}

export default Price
