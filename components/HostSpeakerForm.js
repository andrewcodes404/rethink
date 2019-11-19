import React from 'react'

class HostSpeakerForm extends React.Component {
    render() {
        return (
            <div>
                <p>HostSpeakerForm</p>

                <TextField
                    size="small"
                    type="text"
                    id="hostName"
                    label="hostName"
                    className="text-field"
                    variant="outlined"
                    value={this.state.hostName}
                    onChange={this.handleChange}
                    required
                    // fullWidth={false}
                    disabled={this.state.sessionTheme}
                />

                <TextField
                    size="small"
                    type="text"
                    id="hostTitle"
                    label="hostTitle"
                    className="text-field"
                    variant="outlined"
                    value={this.state.hostTitle}
                    onChange={this.handleChange}
                    required
                    fullWidth={false}
                />

                <TextField
                    size="small"
                    type="text"
                    id="hostOrg"
                    label="hostOrg"
                    className="text-field"
                    variant="outlined"
                    value={this.state.hostOrg}
                    onChange={this.handleChange}
                    required
                    fullWidth={false}
                />

                <TextField
                    type="text"
                    id="facebook"
                    label="https://facebook_url"
                    className="text-field"
                    margin="normal"
                    variant="outlined"
                    value={this.state.facebook}
                    onChange={this.handleChange}
                    pattern="https://.*"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <Face />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    type="text"
                    id="instagram"
                    label="instagram_name"
                    className="text-field"
                    margin="normal"
                    variant="outlined"
                    value={this.state.instagram}
                    onChange={this.handleChange}
                    pattern="https://.*"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <PhotoCamera />
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    type="text"
                    id="twitter"
                    label="@twitter_handle"
                    className="text-field"
                    margin="normal"
                    variant="outlined"
                    value={this.state.twitter}
                    onChange={this.handleChange}
                    pattern="@.*"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <Phonelink />
                            </InputAdornment>
                        ),
                    }}
                />

                <div className="img-upload-wrapper">
                    <input
                        accept=".png,.jpg,.jpeg"
                        // className={classes.input}
                        style={{ display: 'none' }}
                        id="file"
                        multiple
                        type="file"
                        onChange={this.uploadFile}
                    />
                    <label htmlFor="file">
                        <Button
                            variant="contained"
                            // variant="outlined"
                            component="span"
                            // color="secondary"
                            size="small"
                            className="upload-btn"
                        >
                            Upload Logo
                            <CloudUploadIcon className="icon" />
                        </Button>
                    </label>

                    {this.state.logo.length < 1 && (
                        <div className="fake-logo">
                            <PhotoLibrary className="fake-icon" />
                        </div>
                    )}

                    {this.state.logo.length > 1 && (
                        <img
                            className="thumb"
                            width="200"
                            src={this.state.logo}
                            alt="Upload Preview"
                        />
                    )}
                </div>

                <div className="btm-wrapper">
                    <TextField
                        type="number"
                        id="index"
                        label="index position"
                        className="input-number"
                        margin="normal"
                        variant="outlined"
                        value={this.state.index}
                        onChange={this.handleChange}
                        required
                        fullWidth={false}
                        // helperText="a shifting dream a bittersweet philosophy"
                    />
                    <label className="input-checkbox">
                        Show in front page carousel
                        <Checkbox
                            title="frontpage"
                            id="frontpage"
                            color="default"
                            checked={this.state.frontpage}
                            onChange={this.handleCheckboxChange}
                        />
                    </label>
                </div>
            </div>
        )
    }
}

export default HostSpeakerForm
