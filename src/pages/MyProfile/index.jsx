import React from 'react'
//Styles
import S from './styles'
//Components
import MyProfileCard from '../../components/Profile/MyProfileCard'

const MyProfilePage = () => {
  return (
    <S.ProfilePage>
        <S.ProfilePageLayout>
            <MyProfileCard/>
        </S.ProfilePageLayout>
    </S.ProfilePage>
  )
}

export default MyProfilePage