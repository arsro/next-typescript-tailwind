import { NextPage } from 'next'

const Page: NextPage = (props) => {
  return (
    <div className="bg-gray-200 p-4">
      <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2">1</span>
      <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">2</span>
      <span className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-2">3</span>
    </div>
  )
}

export default Page
