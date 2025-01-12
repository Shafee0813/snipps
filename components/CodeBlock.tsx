"use client";
import { useEffect, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/base16/material-darker.css"; 
import { CheckIcon, Clipboard } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState<string>("")
  useEffect(() => {
    hljs.highlightAll(); // Apply syntax highlighting
  }, [code, language]);

  const handleCopy = () => {
    setCopied(code);
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      setCopied("")
    }, 3000)
  };

  return (
    <div className="rounded-t-xl overflow-auto dark-scrollbar">
      <div className="w-full bg-zinc-900 rounded-t-xl flex justify-between">
        <h1 className="text-white text-sm p-2 pl-4">{language}</h1>  
        <button onClick={handleCopy} className="text-white mr-1 p-2">
          {copied ? <CheckIcon className="w-4 h-4"/> : <Clipboard className="w-4 h-4"/>} 
          
        </button>
      </div>
      <pre className="overflow-auto dark-scrollbar">
        <code className={`language-${language}`}>
        {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
