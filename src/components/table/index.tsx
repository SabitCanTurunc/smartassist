import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table'
  import { cn } from '@/lib/utils'
  
  type DataTableProps = {
    headers: string[]
    children: React.ReactNode
  }
  
  export const DataTable = ({ headers, children }: DataTableProps) => {
    return (
      <Table className="rounded-t-xl overflow-hidden">
        <TableHeader>
          <TableRow className="bg-orange">
            {headers.map((header, key) => (
              <TableHead
                key={key}
                className={cn(
                  key == headers.length - 1 && 'text-right',
                  'text-white'
                )}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{children}</TableBody>
      </Table>
    )
  }