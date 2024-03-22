import hljs from 'highlight.js';
import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

export default function WorkSpace () {
  const [code, setCode] = useState('');
  const [formatCode, setFormatCode] = useState('');
  const [fileName, setFileName] = useState('');

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setCode(value);
  }

  return (
    <div className="flex justify-center">
      <div
        style={{ width: 520 }}
      >
        <div
          style={{
            padding: 64,
            backgroundImage: 'linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))'
          }}
        >
          <div
            className="border-none bg-frame-background rounded-[10px] pt-[10px] flex flex-col min-h-[120px] items-stretch"
            style={{ transition: 'all .3s ease' }}
          >
            <div
              className="grid gap-[12px] grid-cols-fr48 items-center h-[24px] px-[16px]"
            >
              <div className="flex gap-[6px]">
              {
                [1,2,3].map((i) => (
                  <div key={i} className="w-[12px] h-[12px] rounded-[6px] bg-frame-control-color" />
                ))
              }
              </div>
              <div className="h-[16px] text-frame-title-placeholder-color text-[12px] font-medium tracking-[0.32px] leading-[12px] flex justify-center items-center">
                <Input
                  className="h-[12px] w-full border-none m-0 bg-transparent text-frame-title-color text-[12px] font-medium inset-0 tracking-[0.32px] leading-[12px] text-center outline-none shadow-none"
                  value={fileName}
                  onChange={(e) => { setFileName(e.target.value) }}
                  placeholder="Untitled-1"
                />
              </div>
            </div>
            <div>
              <Textarea
                className="border-none outline-none resize-none bg-transparent"
                style={{ textSizeAdjust: 'none', WebkitTextFillColor: 'transparent' }}
                spellCheck={false}
                autoComplete="off"
                value={code}
                onChange={handleTextAreaChange}
              />
              <pre><code className="language-html"></code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}