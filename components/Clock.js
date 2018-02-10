export default ({ lastUpdate }) => {
  return (
    <div>
      {format(new Date(lastUpdate))}
      <style jsx>{`
        div {
          display: inline-block;
          color: #82FA58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }
      `}</style>
    </div>
  )
}

const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = n => n < 10 ? `0${n}` : n
