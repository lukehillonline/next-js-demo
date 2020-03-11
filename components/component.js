export default function Component(props) {
    let { number } = props;
    let templateArray = [];

    for (let i = 0; i < number; i++) {
        templateArray.push(
            <div>
                <p>Hello this is Component.</p>
                <p>{number}</p>
            </div>
        );
    }

    return templateArray;
}
