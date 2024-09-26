
'use client'
import { DotsThreeOutlineVertical, Funnel, Plus } from 'phosphor-react'
import {
  Badge,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  DropdownList,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'keep-react'
import { nanoid } from 'nanoid'
import { onHoldFields } from '@/types/common/fields'
import { OnHoldData } from '@/types/common/mockData'
import TableWrap from '@/components/common/table/TableWrap'

export const TableComponent = () => {
  return (
    <TableWrap >
      <Table className="table-auto">
        <TableCaption>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-5">
              <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Total Product</h2>
              <Badge className="dark:bg-metal-800 dark:text-white">
                500 Product
              </Badge>
            </div>
            <div className="flex items-center gap-5">
              <Button variant="outline" className="flex gap-1.5">
                <Plus className="size-4 fill-metal-900 dark:fill-white" />
                Add Product
              </Button>
              <Button variant="outline" className="flex gap-1.5">
                <Funnel className="size-4 fill-metal-900 dark:fill-white" />
                Filter Product
              </Button>
            </div>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            {onHoldFields.map((items) =>
              <TableHead key={nanoid()}>
                <div className="w-[110px]">{items.label}</div>
              </TableHead>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {OnHoldData.map((item) => (
            <TableRow key={nanoid()}>
              <TableCell>{item.booking_date}</TableCell>
              <TableCell>{item.booking_id}</TableCell>
              <TableCell>{item.flight_date}</TableCell>
              <TableCell>{item.issue_before}</TableCell>
              <TableCell>{item.passenger_name}</TableCell>
              <TableCell>{item.pnr}</TableCell>
              <TableCell>{item.route}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.total_price}</TableCell>
              <TableCell>{item.action}</TableCell>
              <TableCell>
                <Dropdown>
                  <DropdownAction asChild>
                    <button>
                      <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                    </button>
                  </DropdownAction>
                  <DropdownContent className="max-w-[200px] border border-metal-100 p-3">
                    <DropdownList>
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Move</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownList>
                  </DropdownContent>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrap>
  )
}

