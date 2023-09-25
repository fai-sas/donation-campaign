import { useLoaderData } from 'react-router-dom'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts'

const Statistics = () => {
  const donations = useLoaderData()
  console.log(donations)

  const data = [
    { name: 'Total Donation', value: donations.length },
    { name: 'Your Donation', value: 4 },
  ]

  const COLORS = ['#FF444A', '#00C49F']

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    )
  }

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <div>
        <h1 className='py-8 text-2xl font-bold'>Statistics</h1>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </ResponsiveContainer>
  )
}
export default Statistics
