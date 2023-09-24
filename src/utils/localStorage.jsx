const getDonationData = () => {
  const storedDonationData = localStorage.getItem('donation-request')
  if (storedDonationData) {
    return JSON.parse(storedDonationData)
  }
  return []
}

const saveDonationData = (id) => {
  const storedDonationData = getDonationData()
  const exists = storedDonationData.find((donationId) => donationId === id)
  if (!exists) {
    storedDonationData.push(id)
    localStorage.setItem('donation-request', JSON.stringify(storedDonationData))
  }
}

export { getDonationData, saveDonationData }
