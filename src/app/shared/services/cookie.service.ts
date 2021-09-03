import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NameI18n } from'../../models/Hero.model'
import { LanguageConfig } from '../../configes/languages.config'

export interface ServiceStorage {
  key: string,
  value: string
}

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  private languageChange: EventEmitter<string> = new EventEmitter()
  private _lageuageToken: string = 'cn'
  private storage: ServiceStorage[] = []
  constructor() { }

  listenLanguageChange(): EventEmitter<string> {
    return this.languageChange
  }
  private sendLanguageChange(token: string): void {
    this.languageChange.emit(token)
  } 
  
  get NameSwitcher(): any {
      if (this._lageuageToken == LanguageConfig.LANGUAGES_LIST.CHINESE) {
        return NameI18n.CN
      }
      else if(this._lageuageToken == LanguageConfig.LANGUAGES_LIST.ENGLISH) {
        return NameI18n.EN
      }
      else {
        console.log('wrong language')
        return null
      }
  }

  get LanguageToken(): string { return this._lageuageToken}
  set LanguageToken(value: string) { 
    this._lageuageToken = value
    this.sendLanguageChange(value)
  }

  put(key: string, value: string): void {    
    this.languageChange.emit('aa')
    let repeatKey = false
    this.storage.forEach(ele => {
      if (ele.key == key) {
        ele.value = value
        repeatKey = true
      }
    })
    if (!repeatKey)
      this.storage.push(({key, value} as ServiceStorage))
  }

  get(key: string): string | null {
    let result: string | null = null
    this.storage.forEach(ele => {
      if(ele.key == key) result = ele.value
    })
    return result
  }
}
