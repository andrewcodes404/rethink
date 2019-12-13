user chris.b@rethink-event.com  pw zaha

# TO DO

*on the programme page*

PageProgramme --> index.js

order Sessions by time ✅
query to get host data ✅
query to get speakers data ✅
query to get sponsors data ✅
query to get supporters data ✅

show linkedIn on SPonsor Modal

send data to pop modals 

remove border-bottom from last session item





import { Editor } from '@tinymce/tinymce-react'


handleEditorChange = e => {
        console.log('Content was updated:', e.target.getContent())

        const id = e.target.id
        const value = e.target.getContent()

        this.setState({ [id]: value })
    }


<br />
<h3 style={{ textAlign: 'left' }}>Bio</h3>
<br />
<Editor
    id="learnings"
    apiKey={process.env.TINY_MCE_API_KEY}
    initialValue={this.state.learnings}
    init={{
        height: 200,
        menubar: false,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
            'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help',
    }}
    onChange={this.handleEditorChange}
/>

<br/>
<br/>


<div className="bio">
    <div dangerouslySetInnerHTML={{ __html: bio }}></div>
</div>