import React, { FunctionComponent } from 'react'
import { Close as CloseIcon } from '@icon-park/react'
import { FeedbackBadge } from '@novem-ui/badge'

import { Content, Actions, IconWrapper, Text, Title, ContentWrapper, CloseWrapper, MessageWrapper } from './styles'
import { MessageProps } from './types'

const Message: FunctionComponent<MessageProps> = ({ title, message, onClose, action, baseColor, variant }) => (
  <MessageWrapper baseColor={baseColor}>
    <Content>
      <IconWrapper>
        <FeedbackBadge variant={variant} />
      </IconWrapper>
      <ContentWrapper>
        {title ? (
          <>
            <Title>{message}</Title>
            <Text withTitle={!!title}>{message}</Text>
          </>
        ) : (
          <Text>{message}</Text>
        )}
      </ContentWrapper>
    </Content>
    <Actions>
      {action && action}
      {onClose && (
        <CloseWrapper onClick={onClose}>
          <CloseIcon />
        </CloseWrapper>
      )}
    </Actions>
  </MessageWrapper>
)

export default Message
