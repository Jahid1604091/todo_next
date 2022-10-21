import Head from 'next/head'
import { BiAddToQueue } from 'react-icons/bi'
import Form from '../components/form'
import Table from '../components/table'

export default function Home() {
  return (
    <section>
      <Head>
        <title>Crud App</title>
        <meta name='description' content='Simple Crud Using Next with tailwind' />
      </Head>
      <main className='py-5'>
        <h1 className="text-xl text-center py-5 md:text-4xl md:font-bold md:py-10 bg-indigo-100 uppercase tracking-wider md:tracking-widest">Stuff Management</h1>
        <div className="container mx-auto flex justify-between p-5">
          <div className="left flex gap-3 bg-indigo-500 text-white p-2 px-4 rounded-md hover:bg-indigo-400 hover:border-solid">

            <button className='flex uppercase'><BiAddToQueue size={23} />&nbsp; Add Stuff</button>
          </div>
        </div>
        <div className="container mx-auto px-4">

          <Form />
        </div>
        <div className="container mx-auto px-4">

          <Table />
        </div>


      </main>

    </section>
  )
}
