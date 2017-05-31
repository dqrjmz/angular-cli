import { ng } from '../../utils/process';
import { expectFileToMatch } from '../../utils/fs';
import { expectToFail } from '../../utils/utils';


export default function () {
  return ng('build', '--aot', '--ngo')
    .then(() => expectToFail(() => expectFileToMatch('dist/vendor.js', /\.decorators =/)));
}
