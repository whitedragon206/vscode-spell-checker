import { expect } from 'chai';
import { calcSettingsForLanguage, defaultLanguageSettings } from '../src/LanguageSettings';

describe('Validate LanguageSettings', () => {
    it('tests merging language settings', () => {
        const sPython = calcSettingsForLanguage(defaultLanguageSettings, 'python');
        expect(sPython.allowCompoundWords).to.be.true;
        expect((sPython.dictionaries || []).sort()).to.be.deep.equal(['wordsEn', 'companies', 'softwareTerms', 'node', 'python'].sort());

        const sPhp = calcSettingsForLanguage(defaultLanguageSettings, 'php');
        expect(sPhp.allowCompoundWords).to.be.undefined;
        expect((sPhp.dictionaries || []).sort())
            .to.be.deep.equal(['wordsEn', 'companies', 'softwareTerms', 'node', 'php', 'html', 'fonts', 'css', 'typescript'].sort());
    });
});