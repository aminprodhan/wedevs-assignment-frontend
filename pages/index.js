import Head from 'next/head'
import Image from 'next/image'
import ContainerHomeDefault from '~/components/layouts/ContainerHomeDefault';
import Products from '~/components/elements/product/Index';
import UserRoute from '~/components/routes/UserRoute';

export default function Home() {
  return (
    <UserRoute>
        <ContainerHomeDefault title="MyCrud">
        <Products />
        </ContainerHomeDefault>
    </UserRoute>
    
  )
}
