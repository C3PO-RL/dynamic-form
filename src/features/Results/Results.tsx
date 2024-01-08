import React from 'react'
import { useAppSelector } from '../../redux/store/hooks'
import { GridColumnLayout, Text } from '../../shared/styles/globalStyles'
import { useCheckMobile } from '../../shared/hooks/useCheckMobile'
import { Container, CustomBackButton, TextContainer } from './styles'
import { useNavigate } from 'react-router-dom'

const Results: React.FC = () => {
  const state = useAppSelector((state) => state.formSlice.formData)
  const isMobile = useCheckMobile()
  const navigate = useNavigate()
  return (
    <Container>
      <Text $fontWeight='800' $fontSize='26px' $padding='0 0 4vh 0'>
        Thanks for submitting your data!
      </Text>
      {state.map((field, index) => (
        <div key={index}>
          {Array.isArray(field) ? (
            <GridColumnLayout
              $columns={`repeat(${
                !isMobile ? field.length : 1
              }, minmax(0%, 100%))`}
            >
              {field.map((subField, subIndex) => (
                <div key={subIndex}>
                  {Object.entries(subField).map(([key, value]) => (
                    <TextContainer key={key}>
                      <Text $fontWeight='700'>
                        {String(key)
                          .replace(/([a-z])([A-Z])/g, '$1 $2') // Separate camel case
                          .split(' ')
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(' ')}
                        :
                      </Text>
                      <Text $margin='0px 0px 0px 5px'>{String(value)}</Text>
                    </TextContainer>
                  ))}
                </div>
              ))}
            </GridColumnLayout>
          ) : (
            <>
              {Object.entries(field).map(([key, value]) => (
                <TextContainer key={key}>
                  <Text $fontWeight='700'>
                    {String(key)
                      .replace(/([a-z])([A-Z])/g, '$1 $2') // Separate camel case
                      .split(' ')
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(' ')}
                    :
                  </Text>
                  <Text $margin='0px 0px 0px 5px'>{String(value)}</Text>
                </TextContainer>
              ))}
            </>
          )}
        </div>
      ))}
      <CustomBackButton onClick={() => navigate('/')}>Back</CustomBackButton>
    </Container>
  )
}

export default Results
