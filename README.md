# textlint-rule-no-period-on-paragraph-end

textlint rule for no period on paragraph end

## 📖 Rule Details

This rule does not allow punctuation at the end of a paragraph. This use case is used, for example, when you want to express rhythm or lingering phrases in a sentence, such as in the Japanese word "体言止め"(ending a sentence with a noun).

### ❌ NG

```
This is simple paragraph.

This paragraph has multiple sentences. First sentence is here. And the last sentence is here.

これはシンプルな段落。

この段落には複数の文がある。これが最初、そしてこれが最後の文。
```

### ✅ OK

```
This is simple paragraph

This paragraph has multiple sentences. First sentence is here. And the last sentence is here

これはシンプルな段落

この段落には複数の文がある。これが最初、そしてこれが最後の文
```

## 💿 Installlation

Install with [npm](https://www.npmjs.com/):

```sh
npm install textlint-rule-no-period-on-paragraph-end
```

## 🚀 Usages

Via `.textlintrc.json`(Recommended):

```json
{
  "rules": {
    "no-period-on-paragraph-end": true
  }
}
```

Via CLI

```sh
textlint --rule no-period-on-paragraph-end README.md
```

## 🙌 Contributing guidelines

If you are interested in contributing to `textlint-rule-no-period-on-paragraph-end`, I highly recommend checking out [the contributing guidelines](/CONTRIBUTING.md) here. You'll find all the relevant information such as [how to make a PR](/CONTRIBUTING.md#pull-request-guidelines), [how to setup development](/CONTRIBUTING.md#development-setup)) etc., there.

## ©️ License

[MIT](http://opensource.org/licenses/MIT)
