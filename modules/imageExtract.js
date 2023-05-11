const fs = require('fs')
const path = require('path')
const { URL } = require('url')
const { join } = require('path')
const consola = require('consola')
import  { DownloaderHelper } from 'node-downloader-helper'



import fetch from 'node-fetch';

import { defineNuxtModule, addPlugin } from '@nuxt/kit'

const defaults = {
  path: '/_images', // dir where downloaded images will be stored
  extensions: ['jpg', 'jpeg', 'gif', 'png', 'webp', 'svg'],
  baseUrl: '' // cms url
  // TODO: add option to allow keeping the original folder structure
}

export default defineNuxtModule({  
  setup (options, nuxt) {
    
    nuxt.hook('build:done', async () => {
      if (process.env.NODE_ENV == "production") {

      
      const response  = await fetch("https://api.notion.com/v1/databases/0d70e9e7157b447b92d98b9f4808857d/query",
      {
        method: "POST",
        
        headers : {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
          'Notion-Version': '2022-06-28',
        }
      })
      
      const body = await response.json();    
      
      for (const typo of body.results) {
        const url  = typo.url
        const  data  = await fetch(`https://api.notion.com/v1/blocks/${url.slice(url.length - 32, url.length)}/children`,
        {
          headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
            'Notion-Version': '2022-06-28',
          }
        })

        const body = await data.json()
        
        for(const block of body.results) {
          if (block.type === "image") {
            const dl = new DownloaderHelper(block.image.file.url,path.join( __dirname, "../assets/images/"));
            dl.on('end', () => console.log('Download Completed'));
            dl.on('error', (err) => console.log('Download Failed', err));
            dl.start().catch(err => console.error(err));
          }
        }
      }
    }

    })
  }})
  