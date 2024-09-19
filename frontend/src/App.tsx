import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CopyIcon } from 'lucide-react'

export default function Component() {
  const [url, setUrl] = useState('')
  const [choice, setChoice] = useState('option1')
  const [result, setResult] = useState('holyfuck')

  const handleGenerate = () => {
    // This is a placeholder for the actual webhook generation logic
    setResult(`Generated webhook for ${url} with option ${choice}`)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(result)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <h1 className="text-3xl font-bold text-center">Gitlab Wecom Webhook</h1>
        
        <Input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        
        <RadioGroup value={choice} onValueChange={setChoice} className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="option1" />
            <Label htmlFor="option1">Option 1</Label>
          </div>
          <img src="/placeholder.svg?height=100&width=200" alt="Preview of Option 1" className="rounded-md" />
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="option2" />
            <Label htmlFor="option2">Option 2</Label>
          </div>
          <img src="/placeholder.svg?height=100&width=200" alt="Preview of Option 2" className="rounded-md" />
        </RadioGroup>
        
        <Button onClick={handleGenerate} className="w-full">Generate Webhook</Button>
        
        <div className="bg-muted p-4 rounded-md relative">
          <p className="pr-10">{result}</p>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleCopy}
          >
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}