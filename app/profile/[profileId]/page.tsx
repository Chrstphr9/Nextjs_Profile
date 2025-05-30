import Header from '@/components/Profile/header'
import MySocials from '@/components/Social/page'
import Footer from '@/components/Footer/footer'
import { notFound } from 'next/navigation';
import { Contact } from '@/lib/type';

const Page = async() => {
  let userInfo: Contact  | null = null
  try {
    const response = await fetch('https://figocard.com/api/v1/user/card/uniquecode/vYmVXYyI28');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json() as { responseCode: string, responseData: Contact[], responseMessage?: string };


    if (data.responseCode !== "00" && data.responseCode !== "01") {
      throw new Error(data.responseMessage || 'Failed to fetch data');
    }
    userInfo = data.responseData[0];
  } catch (err) {
    notFound();
  }

  return (
    <>
      <Header userInfo={userInfo} />
      <MySocials userInfo={userInfo} />
      <Footer />
    </>
  )
}

export default Page