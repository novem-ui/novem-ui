import React, { FunctionComponent } from 'react'
import { Close as CloseIcon } from '@icon-park/react'
import { FeedbackBadge } from '@novem-ui/badge'
import { Box, Flex } from '@novem-ui/layout'
import { Paragraph } from '@novem-ui/text'
import Button from '@novem-ui/button'

import { MessageWrapper } from './styles'
import { MessageTypes } from './types'

const Message: FunctionComponent<MessageTypes> = ({ title, message, onClose, action, baseColor, variant }) => {
  const hasTitle = !!title
  const messageSize = hasTitle ? 'xs' : 'sm'

  return (
    <MessageWrapper baseColor={baseColor}>
      <Flex align="center">
        <FeedbackBadge variant={variant} mt={4.5} />
        <Box ml={4}>
          {!!hasTitle && (
            <Paragraph weight="bold" size="sm" mb={1}>
              {title}
            </Paragraph>
          )}
          <Paragraph size={messageSize}>{message}</Paragraph>
        </Box>
      </Flex>
      <Flex align="center">
        {action && action}
        {onClose && (
          // TODO: i18n this aria-label
          <Button onClick={onClose} aria-label="close" hierarchy="link" m="0px" p="4px 0px 0px 0px">
            <CloseIcon size={16} />
          </Button>
        )}
      </Flex>
    </MessageWrapper>
  )
}

export default Message
