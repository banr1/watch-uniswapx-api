// components/settled-output-token-cell.tsx

import React from 'react';

import { TableCell } from '@/components/ui/table';
import { ERC20 } from '@/constants/erc20';
import { formatTokenAmount, shortenHash } from '@/lib/utils';
import { Settlement } from '@/types/settlement';

const SettledOutputTokenCell = (props: { settlement: Settlement }) => {
  const { settlement } = props;
  if (ERC20[1][settlement.tokenOut] === undefined) {
    return <TableCell>{shortenHash(settlement.tokenOut)}</TableCell>;
  }

  const tokenInfo = ERC20[1][settlement.tokenOut];
  const name = tokenInfo.name;
  const amount = formatTokenAmount(settlement.amountOut, tokenInfo.decimals);

  return <TableCell>{`${amount} ${name}`}</TableCell>;
};

export default SettledOutputTokenCell;
