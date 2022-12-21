import Header from "../../component/Header"
import { Box } from "@mui/material"

export default function dashboard() {
  return (
    <Box m="20px">
      <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
        <Header title="DASHBOARD" subtitle="welcome to your dashboard"/>
      </Box>
    </Box>
  )
}
