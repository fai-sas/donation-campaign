import { useLoaderData } from 'react-router-dom'
import { PieChart, Pie, Cell, Legend } from 'recharts'
import { getDonationData } from '../../utils/localStorage'

const Statistics = () => {
  const donations = useLoaderData()
  const storedDonationIds = getDonationData()

  const totalDonations = donations.length
  const totalGivenDonations = storedDonationIds.length

  const userDonationPercentage = (totalGivenDonations / totalDonations) * 100
  const totalDonationPercentage = 100 - userDonationPercentage

  const data = [
    { name: 'Total Donation', value: totalDonationPercentage },
    { name: 'Your Donation', value: userDonationPercentage },
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
        className='text-2xl font-bold'
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    )
  }

  return (
    <div className=''>
      <PieChart width={400} height={400} className='container py-12 mx-auto'>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
          fill='#8884d8'
          dataKey='value'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  )
}
export default Statistics
