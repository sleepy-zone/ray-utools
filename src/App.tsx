import { useState } from 'react'
import WorkSpace from './components/app/workspace'

function App() {
  return (
    <div className="h-full bg-background flex justify-center items-center">
      {/* 操作区 */}
      <WorkSpace />

     {/* 配置区 */}
      {/* <div>
        
      </div> */}

      {/* 其他信息 */}
      {/* <div>
      
      </div> */}
    </div>
  )
}

export default App
